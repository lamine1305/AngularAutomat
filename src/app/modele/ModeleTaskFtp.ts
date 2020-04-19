export class ModeleTaskFtp {
    private _identifiant: string;   
    private _instanceId: string;
    private _destination: String;
    private _type: String;
    private _origine: String;
    public get origine(): String {
        return this._origine;
    }
    public set origine(value: String) {
        this._origine = value;
    }
    public get destination(): String {
        return this._destination;
    }
    public set destination(value: String) {
        this._destination = value;
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
    public get type(): String {
        return this._type;
    }
    public set type(value: String) {
        this._type = value;
    }

    public toXML():String
    {
        let xml:String =
        '\n'+'<jddList>'+'\n'+
        '<jdd>'+'\n'+
        '<type>'+this.type+'</type>'+'\n'+
        '<path>'+this.origine+'</path>'+'\n'+
        '<pathDestination>'+this.destination+'</pathDestination>'+'\n'+
        '</jdd>'+'\n'+
        '</jddList>';
       return xml; 
    }

}