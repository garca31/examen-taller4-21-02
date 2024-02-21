import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaginaController } from './pagina/pagina.controller';
import { PaginaService } from './pagina/pagina.service';
import { PaginaModule } from './pagina/pagina.module';

@Module({
  imports: [PaginaModule],
  controllers: [AppController, PaginaController],
  providers: [AppService, PaginaService],
})
export class AppModule {}
