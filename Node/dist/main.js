"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const ejs = require("ejs");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'html');
    app.set('views', (0, path_1.join)(__dirname, '..', 'views'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map