import Hero from "./Hero";

class Marvel extends Hero {
    constructor(name: string, description: string, url: string) {
        super(name, description, url)

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown = (e: { preventDefault: () => void; key: string; stopPropagation: () => void; }) : any => {
        e.preventDefault();
        e.stopPropagation();

        const modal = document.getElementById("myModal");
        const modalContent = document.getElementById("modalContent");

        if (e.key === "Escape" && modal !== null) {
                modalContent?.removeEventListener('keydown', this.onKeyDown);
                modal.style.display="none";
        }
    }
}

export default Marvel;
