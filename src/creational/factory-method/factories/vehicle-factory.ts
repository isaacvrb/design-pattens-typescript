import { Vehicle } from '../vehicle/vehicles';

export abstract class VehicleFactory {
    abstract getVehicle(vehicleName: string): VehicleFactory;
}
