export class ModeleTaskDescription {
    private _identifiant: string;
    private _instanceId: string;
    private _typeTest:String;
    private _nomTest: String;
    private _env: String;
    private _formatDateHeure: String;
    private _formatDate: String;
    private _fluxStm: String;
    private _separateur: String;
    private _repertoireResult: String;

    public get separateur(): String {
        return this._separateur;
    }
    public set separateur(value: String) {
        this._separateur = value;
    }
    public get formatDate(): String {
        return this._formatDate;
    }
    public set formatDate(value: String) {
        this._formatDate = value;
    }
    public get formatDateHeure(): String {
        return this._formatDateHeure;
    }
    public set formatDateHeure(value: String) {
        this._formatDateHeure = value;
    }
    public get repertoireResult(): String {
        return this._repertoireResult;
    }
    public set repertoireResult(value: String) {
        this._repertoireResult = value;
    }
    public get typeTest(): String {
        return this._typeTest;
    }
    public set typeTest(value: String) {
        this._typeTest = value;
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
    public get nomTest(): String {
        return this._nomTest;
    }
    public set nomTest(value: String) {
        this._nomTest = value;
    }
    public get env(): String {
        return this._env;
    }
    public set env(value: String) {
        this._env = value;
    }
    public get fluxStm(): String {
        return this._fluxStm;
    }
    public set fluxStm(value: String) {
        this._fluxStm = value;
    }
    public toXML():String
    {
        let xml:String = '<description>'+'\n'+
        '<name>'+this.nomTest+'</name>'+'\n'+
        '<envSTM>'+this.env+'</envSTM>'+'\n'+
        '<typeTest>'+this.typeTest+'</typeTest>'+'\n'+
        '<flux>'+this.fluxStm+'</flux>'+'\n'+
        '<separator>'+this.separateur+'</separator>'+'\n'+
        '<formatDate>'+this.formatDate+'</formatDate>'+'\n'+
        '<formatDateTime>'+this.formatDateHeure+'</formatDateTime>'+'\n'+
        '<pathResult>'+this.repertoireResult+'</pathResult>'+'\n'+
        '</description>';
        return xml; 
    }
}
