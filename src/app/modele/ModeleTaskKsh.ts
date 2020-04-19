export class ModeleTaskKsh {
    private _identifiant: string;   
    private _instanceId: string;
    private _commandeksh: string;
    private _tempoAvant: string;
    private _tempoApres: string;

    public get commandeksh(): string {
        return this._commandeksh;
    }
    public set commandeksh(value: string) {
        this._commandeksh = value;
    }
    public get tempoAvant(): string {
        return this._tempoAvant;
    }
    public set tempoAvant(value: string) {
        this._tempoAvant = value;
    }
    public get tempoApres(): string {
        return this._tempoApres;
    }
    public set tempoApres(value: string) {
        this._tempoApres = value;
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
    public toXML():String
    {
        let xml:String =
        '\n'+'<commandList>'+'\n'+
        '<command>'+'\n'+
        '<value>'+this.commandeksh+'</value>'+'\n'+
        '<waiting>'+this.tempoAvant+'-'+'befire'+'</waiting>'+'\n'+
        '<waiting>'+this.tempoApres+'-'+'after'+'</waiting>'+'\n'+
        '</command>'+'\n'+
        '</commandList>';
       return xml; 
    }

}
