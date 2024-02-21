import { Controller,Get,Render } from '@nestjs/common';

@Controller('Pagina')
export class PaginaController {
    @Get()
    @Render('Pagina')
    Pagina(){
        return[]
    }
}
