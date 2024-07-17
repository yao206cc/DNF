import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '121.37.156.241',
      port: 3306,
      username: 'root',
      password: 'wMmx6XREnGEtp7kJ',
      database: 'dnf',
      synchronize: true, // 设置 synchronize: true 不应在生产中使用 - 否则你可能会丢失生产数据。
      autoLoadEntities: true,
    }),
    EquipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
