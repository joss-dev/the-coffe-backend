import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestuser',
      password: 'nestpass',
      database: 'nestdb',
      entities: [User, Category, Product],
      synchronize: true, // Solo para desarrollo
    }),
    AuthModule,
    ProductsModule,
    UsersModule,
    CategoryModule,
  ],
})
export class AppModule {}
