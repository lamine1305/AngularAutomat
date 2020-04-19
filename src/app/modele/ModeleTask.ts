export class ModeleTask {
    private _identifiant: string;
    private _instanceId: string;
    private _description: String;
    private _type: String;
    private _police: String;
    private _icone: String;
    constructor(identifiant: string, description: String, type: String, police: String, icone: String) {
        this._identifiant = identifiant;
        this._instanceId='120';
        this._description = description;
        this._type = type;
        this._police = police;
        this._icone = icone;
    }
 
    public get description(): String {
        return this._description;
    }
    public set description(value: String) {
        this._description = value;
    }
    public get type(): String {
        return this._type;
    }
    public set type(value: String) {
        this._type = value;
    }
    public get police(): String {
        return this._police;
    }
    public set police(value: String) {
        this._police = value;
    }
    public get icone(): String {
        return this._icone;
    }
    public set icone(value: String) {
        this._icone = value;
    }
    public get identifiant(): string {
        return this._identifiant;
    }
    public set identifiant(value: string) {
        this._identifiant = value;
    }
    public get instanceId(): string {
        return this._instanceId;
    }
    public set instanceId(value: string) {
        this._instanceId = value;
    }
}
