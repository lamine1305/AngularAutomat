export class ModeleTaskResultSql {
    private _identifiant: string;   
    private _instanceId: string;

    private _eneteFile: String;

    private _nomFichierRepert: String;

    private _preRequete: String;

    private _requeteFichier: String;

    private _fichierGenere: String;
 
    private _fichierAttendu: String;

    public get eneteFile(): String {
        return this._eneteFile;
    }
    public set eneteFile(value: String) {
        this._eneteFile = value;
    }

    public get nomFichierRepert(): String {
        return this._nomFichierRepert;
    }
    public set nomFichierRepert(value: String) {
        this._nomFichierRepert = value;
    }

    public get preRequete(): String {
        return this._preRequete;
    }
    public set preRequete(value: String) {
        this._preRequete = value;
    }

    public get requeteFichier(): String {
        return this._requeteFichier;
    }
    public set requeteFichier(value: String) {
        this._requeteFichier = value;
    }

    public get fichierGenere(): String {
        return this._fichierGenere;
    }
    public set fichierGenere(value: String) {
        this._fichierGenere = value;
    }

    public get fichierAttendu(): String {
        return this._fichierAttendu;
    }
    public set fichierAttendu(value: String) {
        this._fichierAttendu = value;
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
    toXML():String
    {
        let xml:String =
        '\n'+'<generateFile>'+'\n'+
        '<enteteFile>'+this.eneteFile+'</enteteFile>'+'\n'+
        '<file>'+this.fichierGenere+'</file>'+'\n'+
        '<path>'+this.nomFichierRepert+'</path>'+'\n'+
        '<preRequete>'+this.preRequete+'</preRequete>'+'\n'+
        '<requetePrincipale>'+this.requeteFichier+'</requetePrincipale>'+'\n'+
        '</generateFile>'+'\n'+
        '<comparaison>'+'\n'+
            '<type>'+'line'+'</type>'+'\n'+
            '<fileA>'+this.fichierGenere+'</fileA>'+'\n'+
            '<fileB>'+this.fichierAttendu+'</fileB>'+'\n'+
        '</comparaison>'+'\n'+
        '<comparaison>'+'\n'+
            '<type>'+'column'+'</type>'+'\n'+
            '<fileA>'+this.fichierGenere+'</fileA>'+'\n'+
            '<fileB>'+this.fichierAttendu+'</fileB>'+'\n'+
        '</comparaison>'+'\n'       
         return xml;
    }
}