import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { AttendaceModule } from './attendace/attendace.module';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "hr",
      synchronize: true,
      entities: ["dist/**/*.entity{.js,.ts}"],
    }),
    UsersModule,
    AuthModule,
    AttendaceModule,
    LeaveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
