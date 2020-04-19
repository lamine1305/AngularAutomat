export class ModeleTaskIhm {
    private _identifiant: string;
    private _instanceId: string;
    private _jddIhm: string;
    private _descr: string;
    private _commande: string;
    private _env: string;


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
    public get jddIhm(): string {
        return this._jddIhm;
    }
    public set jddIhm(value: string) {
        this._jddIhm = value;
    }
    public get commande(): string {
        return this._commande;
    }
    public set commande(value: string) {
        this._commande = value;
    }
    public get descr(): string {
        return this._descr;
    }
    public set descr(value: string) {
        this._descr = value;
    }
    public get env(): string {
        return this._env;
    }
    public set env(value: string) {
        this._env = value;
    }
    public toXML():String
    {
        let xml:String =
        '\n'+'<jddIhm>'+'\n'+
        '<description>'+this.descr+'</description>'+'\n'+
        '<jdd>'+this.jddIhm+'</jdd>'+'\n'+
        '<commande>'+this.commande+'</commande>'+'\n'+
        '<environnement>'+this.env+'</environnement>'+'\n'+
        '</jddIhm>';
       return xml; 
    }
}
