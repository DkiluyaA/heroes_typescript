class Hero {
    name: string;
    description: string;
    url: string;

    constructor(name: string, description: string, url: string){
        this.name = name;
        this.description = description;
        this.url = url;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onPreviewClick = this.onPreviewClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onPreviewClick = (): any => {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modalContent");

        if(modal !== null) {
            modal.style.display = "block";
            modalContent?.addEventListener('keydown', this.onKeyDown);
            modalContent?.focus();
        }
    }

    onClose = (): any => {
        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modalContent");

        if(modal !== null) {
            modalContent?.removeEventListener('keydown', this.onKeyDown);
            modal.style.display = "none";
        }
    }

    onKeyDown = (e: { preventDefault: () => void; key: string; stopPropagation: () => void; }) : any => {}

}
export  default Hero;
