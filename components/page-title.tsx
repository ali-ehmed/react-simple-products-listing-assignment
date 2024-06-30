type PageTitleProps = {
    title: string;
    description?: string;
};

export default function PageTitle({ title, description }: PageTitleProps) {
    return (
        <header className='max-w-6xl lg:mx-auto border-b py-6 '>
            <h1 className='text-4xl font-bold'>{title}</h1>
            {description && <p className='pt-2 text-sm'>{description}</p>}
        </header>
    );
}