import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secretoTheCoffee',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
