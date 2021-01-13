export class ExternalLink {

    private _uri: string;
    private _label: string;

    constructor(uri?: string, label?: string)
    constructor(uri: string, label: string) {
        this._uri = uri;
        this._label = label;
    }

    get uri(): string {
        return this._uri;
    }

    set uri(uri: string) {
        this._uri = uri;
    }

    get label(): string {
        return this._label;
    }

    set label(label: string) {
        this._label = label;
    }

}
