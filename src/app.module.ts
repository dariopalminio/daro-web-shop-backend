import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { NotificationController } from './controller/notification.controller';
import { NotificationService } from './service/notification.service';

@Module({
  imports: [],
  controllers: [AppController, NotificationController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
