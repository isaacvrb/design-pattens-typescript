import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Isaac', age: 25 });
myDatabaseClassic.add({ name: 'Isaías', age: 23 });
myDatabaseClassic.show();
