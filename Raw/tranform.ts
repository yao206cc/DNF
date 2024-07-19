import fs from "fs"
import path from "path"

const equipmentFieldDescriptions = new Map([
    // ['equipmentId', '装备ID'],
    ['equipmentName', 'name'], //装备名称
    ['applicableLevel', 'level'], //适用等级
    ['applicableClass', '适用职业'],
    ['equipmentQuality', 'rare'], //装备品质
    ['wearPart', '穿戴部位'], //穿戴部位
    ['eequipmentType', 'side_name'], //装备类型
    ['attackSpeedType', '攻击速度类型'],

    ['magicResistance', '抗魔值'],
    ['healthPoints', '生命值'],
    ['manaPoints', '魔法值'],
    ['strength', '力量'],
    ['intelligence', '智力'],
    ['vitality', '体力'],
    ['spirit', '精神'],
    ['physicalAttack', '物理攻击力'],
    ['magicalAttack', '魔法攻击力'],
    ['magicalDefense', '魔法防御力'],
    ['physicalDefense', '物理防御力'],
    ['physicalCriticalRate', '物理暴击率'],
    ['physicalCritical', '物理暴击'],
    ['magicalCriticalRate', '魔法暴击率'],
    ['magicalCritical', '魔法暴击'],
    ['attackSpeed', '攻击速度'],
    ['moveSpeed', '移动速度'],
    ['castSpeed', '施放速度'],
    ['accuracy', '命中'],
    ['accuracyRate', '命中率'],
    ['imageUrl', '装备图片'],

    ['specialEffect', 'spe'],
]);


interface OldEquipment {
    _id: string;
    name: string;
    attr: string;
    spe: string;
    suit: string;
    rare: string;
    level: number;
    suit_name: string;
    equipment_name: string;
    side_name: string;
}
const keyword = `重甲`
function readFile() {
    const resovledPath = path.join(__dirname, `./${keyword}.json`)
    return fs.readFileSync(resovledPath, { encoding: "utf-8" })
}

function writeFile(data: string) {
    try {
        const resovledPath = path.join(__dirname, `./${keyword}-${new Date().getDate()}.json`)
        fs.writeFileSync(resovledPath, data, { encoding: "utf-8" })
        return true
    } catch (error) {
        throw error
    }
}

function parseAttribute(attrStr: string) {
    // 正则表达式匹配 "属性名+/-数值"，数值可以是整数、小数或百分比
    const regex = /^(.+?)([+-])(\d+(\.\d+)?)(%)?$/;
    const match = attrStr.match(regex);
    
    if (match) {
        // match[1] 包含属性名，match[2] 包含符号（+/-），match[3] 包含数值（可能包含小数点），match[5] 包含可选的百分号
        const attrName = match[1].trim();
        let attrValue = parseFloat(match[3]); // 将数值字符串转换为浮点数
        const isPercentage = match[5] === '%'; // 检查是否有百分号
        const isNegative = match[2] === '-'; // 检查符号是否为负号

        // 如果是百分比，将其转换为小数形式
        if (isPercentage) {
            attrValue = attrValue / 100;
        }

        // 如果符号为负号，将数值转换为负数
        if (isNegative) {
            attrValue = -attrValue;
        }

        // 返回一个对象，包含属性名和属性值
        return { [attrName]: attrValue };
    }

    // 如果没有匹配，返回 null 或抛出错误
    return null;
}

class RequestPool {
    maxConcurrentRequests: number;
    currentRequests: number;
    requestQueue: any[];
    constructor(maxConcurrentRequests = 3) {
        this.maxConcurrentRequests = maxConcurrentRequests;
        this.currentRequests = 0;
        this.requestQueue = [];
    }

    // 将请求添加到队列
    addRequest(requestFunction: Function) {
        return new Promise((resolve, reject) => {
            console.log(`插入队列`)
            this.requestQueue.push({ requestFunction, resolve, reject });
            this.processQueue();
        });
    }

    // 处理队列中的请求
    processQueue() {
        if (this.currentRequests >= this.maxConcurrentRequests || this.requestQueue.length === 0) {
            return; // 已达到最大并发数或队列为空
        }

        this.currentRequests++; // 增加当前请求计数

        const { requestFunction, resolve, reject } = this.requestQueue.shift()!; // 取出队列中的第一个请求

        requestFunction()
            .then((response: any) => {
                resolve(response);
            })
            .catch((error: any) => {
                reject(error);
            })
            .finally(() => {
                this.currentRequests--; // 完成一个请求，减少请求计数
                this.processQueue(); // 处理下一个请求
            });
    }
}


function handleResponse(response: any) {
    console.log('Response:', response);
}

function insertRequest(tranformArr:any[]){
    try {
    const requestPool = new RequestPool(3)
        tranformArr.forEach(v => {
            requestPool.addRequest(() => fetch('http://127.0.0.1:3000/equipment', {
                method: "POST",
                body: JSON.stringify(v),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(handleResponse))
        })
    } catch (err) {
        console.error(`Error`,err)
    }
}

const result = readFile()
if (result) {
    const res = JSON.parse(result) as OldEquipment[];
    const reversedMap = new Map(
        Array.from(equipmentFieldDescriptions.entries()).map(([key, value]) => [value, key])
    );
    const tranformArr = res.map((item, index) => {
        const map = new Map()
        const entriesItem = Object.entries(item) as [[keyof OldEquipment, OldEquipment[keyof OldEquipment]]]
        entriesItem.map(([key, value]) => {
            if (reversedMap.get(key)) {
                map.set(reversedMap.get(key), value)
            }
            else {
                if (['_id', 'suit'].includes(key)) {
                    return
                }
                else if (key === "attr" && typeof value === 'string') {
                    value.split('\n').filter(Boolean).map(v => {
                        const translatedAttr = parseAttribute(v.replace(/\s+/g, ''))
                        if (translatedAttr) {
                            Object.entries(translatedAttr).forEach(v => {
                                const [key, value] = v
                                if (reversedMap.get(key)) {
                                    map.set(reversedMap.get(key), value)
                                }
                            })
                        } else {
                            console.error(`Error 属性转换失败：${v}`)
                        }
                    })
                } else {
                    console.error(`Error Could not find Key ${key}, Value ${value}, Index ${index} `)
                }
            }
        })
        // 转JSON
        return Object.fromEntries(map)
    })
    console.log(`开始写入`, `${tranformArr.length}`)
    writeFile(JSON.stringify(tranformArr))
    // insertRequest(tranformArr)
    console.log(`Done`)
}



/**
 * 
 * 数据源问题
 * 
 * 圣职者-武器 
 * 魂·欧贝斯的蓝龙光杖 | 魂·尼尔巴斯的赤玉镰
 * 
 */