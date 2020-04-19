export class ModeleTaskClean {
    private _identifiant: string;   
    private _instanceId: string;
    private _afterBefore: String;
   
    private _requeteClean: String;
    private _repertoireClean: String;

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
    public get afterBefore(): String {
        return this._afterBefore;
    }
    public set afterBefore(value: String) {
        this._afterBefore = value;
    }
 
    public get requeteClean(): String {
        return this._requeteClean;
    }
    public set requeteClean(value: String) {
        this._requeteClean = value;
    }
    public get repertoireClean(): String {
        return this._repertoireClean;
    }
    public set repertoireClean(value: String) {
        this._repertoireClean = value;
    }

    public toXML():String
    {
        let xml:String =
        '\n'+'<cleanTest>'+'\n'+
        '<execute>'+this.afterBefore+'</execute>'+'\n'+
        '<requete>'+this.requeteClean+'</requete>'+'\n'+
        '<repertoireClean>'+this.repertoireClean+'</repertoireClean>'+'\n'+
         '</cleanTest>';
       return xml; 
    }
}
