export interface Python {
    title: string;
    description: string;
}

export interface Js {
    title: string;
    description: string;
}

export interface Java {
    title: string;
    description: string;
}

export default interface AboutMePage {
    python: Python;
    js: Js;
    java: Java;
}


