export class TreatmentPlan {
    constructor(private id: number) {}

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        return (this.id = id);
    }
}
