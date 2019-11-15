import { StorageService } from './app/service/storage.service';
import { PizzeriaView } from './app/view/PizzeriaView.component';
import { PizzaController } from './app/controller/pizza.controller';
import './assets/style.css';

const app = new PizzaController(
  new StorageService(),
  new PizzeriaView(window.document),
);
