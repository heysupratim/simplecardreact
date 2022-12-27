export interface BadgeInterface{
    text: string;
    filled?: boolean; //? makes it optional
}

export interface ButtonInterface{
    text: string;
    type: string;
    href: string;
    filled?: boolean; //? makes it optional
    icon?: JSX.Element;
}

export interface CardInterface{
    indicator?: string,
    badge?: BadgeInterface,
    image?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface
}