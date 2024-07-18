<template>
  <a-card :bordered="false" :loading="loading">
    <a-card-grid style="width: 25%" :hoverable="false" :bordered="false">
      <a-card class="posters" :bordered="false" :body-style="{ padding: '24px' }">
        <Image
          :src="
            enquipmentInfo?.imageUrl ||
            'https://img.zcool.cn/community/01540e569f14206ac7256cb0c596a2.jpg'
          "
          :preview="visible"
          :onClick="() => (visible = true)"
        />
        <div hidden>
          <Image.PreviewGroup
            :preview="{ visible: visible, onVisibleChange: (vis) => (visible = vis) }"
          >
            <Image
              :src="
                enquipmentInfo?.imageUrl ||
                'https://img.zcool.cn/community/01540e569f14206ac7256cb0c596a2.jpg'
              "
            />
          </Image.PreviewGroup>
        </div>
      </a-card>
    </a-card-grid>
    <a-card-grid class="skins" style="width: 75%" :hoverable="false" :bordered="false" />
  </a-card>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { Image } from 'ant-design-vue';
  import { useTabsViewStore } from '@/store/modules/tabsView';
  import Api from '@/api';

  defineOptions({
    name: 'EquipmentInfo',
  });

  const route = useRoute();
  const tabsViewStore = useTabsViewStore();
  const enquipmentInfo = ref<API.EquipmentEntity>();
  const loading = ref(true);
  const visible = ref(false);

  onMounted(async () => {
    const data = await Api.equipment.equipmentFindOne({ id: route.params.id as unknown as number });
    loading.value = false;
    enquipmentInfo.value = data;
    tabsViewStore.updateTabTitle(`${route.meta.title}(${enquipmentInfo.value.equipmentName})`);
  });
</script>

<style lang="less" scoped>
  .skins :deep(.ant-carousel) {
    .slick-dots {
      position: relative;
      height: auto;
    }

    .slick-slide img {
      display: block;
      max-width: 80%;
      margin: auto;
      border: 5px solid #fff;
    }

    .slick-arrow {
      display: none !important;
    }

    .slick-thumb {
      bottom: 0;
    }

    .slick-thumb li {
      width: 60px;
      height: 45px;
    }

    .slick-thumb li img {
      display: block;
      width: 100%;
      height: 100%;
      filter: grayscale(100%);
    }

    .slick-thumb li.slick-active img {
      filter: grayscale(0%);
    }
  }

  /* For demo */
  .posters {
    height: 100%;
    .posters :deep(.ant-carousel) {
      .slick-arrow.custom-slick-arrow {
        z-index: 1;
        width: 25px;
        height: 25px;
        transition: ease all 0.3s;
        opacity: 0.3;
        background-color: rgb(31 45 61 / 11%);
        color: #fff;
        font-size: 25px;
      }

      .slick-arrow.custom-slick-arrow::before {
        display: none;
      }

      .slick-arrow.custom-slick-arrow:hover {
        opacity: 0.5;
        color: #fff;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
defineComponent, import props from 'ant-design-vue/es/dropdown/props'; import src from
'ant-design-vue/es/tabs/src'; defineComponent, import props from 'ant-design-vue/es/dropdown/props';
import src from 'ant-design-vue/es/tabs/src';
