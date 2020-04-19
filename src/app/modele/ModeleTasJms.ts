export class ModeleTaskJms {
    private _identifiant: string;   
    private _instanceId: string;
    private _nomFileJms: String;
    private _nomFichier: string;


    
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
    public get nomFileJms(): String {
        return this._nomFileJms;
    }
    public set nomFileJms(value: String) {
        this._nomFileJms = value;
    }
    public get nomFichier(): string {
        return this._nomFichier;
    }
    public set nomFichier(value: string) {
        this._nomFichier = value;
    }

    public toXML():String
    {
        let xml:String =
        '\n'+'<jms>'+'\n'+
        '<fileJms>'+'\n'+
        '<nomFichier>'+this.nomFichier+'</nomFichier>'+'\n'+
        '<nomFile>'+this.nomFileJms+'</nomFile>'+'\n'+
        '</fileJms>'+'\n'+
        '</jms>';
       return xml; 
    }

}
