export class ModeleTaskTnr {
    private _identifiant: string;   
    private _instanceId: string;
    private _ajoutTnr: String;
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
    public get ajoutTnr(): String {
        return this._ajoutTnr;
    }
    public set ajoutTnr(value: String) {
        this._ajoutTnr = value;
    }
    public toXML():String
    {
        let xml:String =
        '\n'+'<tnr>'+'\n'+
        '<ajoutTnr>'+this.ajoutTnr+'</ajoutTnr>'+'\n'+
        '</tnr>';
       return xml; 
    }

}
