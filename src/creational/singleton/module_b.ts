import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Irani', age: 49 });
myDatabaseClassic.add({ name: 'Joel', age: 49 });
myDatabaseClassic.show();
