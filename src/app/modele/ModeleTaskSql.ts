export class ModeleTaskSql{
    private _identifiant: string;
    private _instanceId: string;
    private _requete: String;   
    
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
    public get requete(): String {
        return this._requete;
    }
    public set requete(value: String) {
        this._requete = value;
    }
    
    public toXML():String
    {
        let xml:String =
        '\n'+'<requete>'+'\n'+
        '<execute>'+this.requete+'</execute>'+'\n'+
         '</requete>';
       return xml; 
    }
}