export class HeaderInfo {


    private _name: string;
    private _position: string;
    private _photoUrl: string;
    private _linkedinUrl: string;
    private _resumeBase64: string;
    private _resumeDownloadName: string;

    constructor(name?: string, position?: string, photoUrl?: string, linkedinUrl?: string, resumeBase64?: string)
    constructor(name: string, position: string, photoUrl: string, linkedinUrl: string, resumeBase64: string) {
        this._name = name;
        this._position = position;
        this._photoUrl = photoUrl;
        this._linkedinUrl = linkedinUrl;
        this._resumeBase64 = resumeBase64;
        this._resumeDownloadName = `${this.name} - Resume.pdf`;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get position(): string {
        return this._position;
    }

    set position(position: string) {
        this._position = position;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }

    set photoUrl(photoUrl: string) {
        this._photoUrl = photoUrl;
    }

    get linkedinUrl(): string {
        return this._linkedinUrl;
    }

    set linkedinUrl(linkedinUrl: string) {
        this._linkedinUrl = linkedinUrl;
    }

    get resumeBase64(): string {
        return this._resumeBase64;
    }

    set resumeBase64(resumeBase64: string) {
        this._resumeBase64 = resumeBase64;
    }

    get resumeDownloadName(): string {
        return this._resumeDownloadName;
    }
}
