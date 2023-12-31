import "./App.css";

function Section({ children, style }) {
    const defaultStyles = " w-full p-4 ";
    return <section className={defaultStyles + style}>{children}</section>;
}

function Header() {
    return (
        <header className="w-full p-4 bg-darkBlue ">
            <nav className="mx-auto bg-fuchsia-400 max-w-screen-md flex">
                <div>
                    <h1>Header Logo</h1>
                </div>
                <ul
                    role="navigation"
                    className="ml-auto bg-amber-400 flex gap-4 "
                >
                    <li>Home</li>
                    <li>About Us </li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </header>
    );
}

function HeroSection() {
    return (
        <section className="mx-auto bg-fuchsia-400 max-w-screen-md flex">
            <div className="flex flex-col gap-4 ">
                <h1 className="text-[48px] ">This website is awesome </h1>
                <p>
                    This website has some subtext that goes here under the main
                    title. Its a smaller font and the color is of lower contrast
                </p>
                <SignUpButton style="bg-midBlue self-start py-2 px-4 rounded-lg " />
            </div>
            <figure>
                <img />
            </figure>
        </section>
    );
}

function SignUpButton({ style }) {
    return <button className={style}>Sign Up </button>;
}

function Item({ text }) {
    return (
        <div>
            <div></div>
            <p>{text}</p>
        </div>
    );
}

function QuoteSection({ text, author }) {
    return (
        <section className="mx-auto bg-fuchsia-400 max-w-screen-md flex">
            <em>{text}</em>
            <p>-{author}</p>
        </section>
    );
}

function CallToAction({ title, paragraph }) {
    return (
        <section className="mx-auto bg-midBlue max-w-screen-md flex">
            <div className="">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="">
                <SignUpButton style="" />
            </div>
        </section>
    );
}

function CatlogueSection() {
    return (
        <section>
            <h2>Some Random Information. </h2>
            <div className="flex flex-wrap w-full ">
                <Item text="this is some subject under an illustration or image" />
                <Item text="this is some subject under an illustration or image" />
                <Item text="this is some subject under an illustration or image" />
                <Item text="this is some subject under an illustration or image" />
            </div>
        </section>
    );
}

function Footer({ text }) {
    return (
        <footer className="mx-auto bg-fuchsia-400 max-w-screen-md flex justify-center items-center">
            <p>{text}</p>
        </footer>
    );
}

export default function Page() {
    return (
        <div className="min-h-screen grid ">
            <Header />
            <Section style=" bg-darkBlue">
                <HeroSection />
            </Section>
            <Section style=" bg-white">
                <CatlogueSection />
            </Section>
            <Section style="bg-dimwhite">
                <QuoteSection
                    text="This is an inspiring quote or a testimonial from a customer. Maybe it's just filling up the space, or maybe people will actually read it. Who knows? All I know is that it looks nice. "
                    author="Thor, god of thunder"
                />
            </Section>
            <Section>
                <CallToAction
                    title="Call to Action! It's time! "
                    paragraph="Sign up for our product by clicking that button right over there!"
                />
            </Section>
            <Section style="bg-darkBlue">
                <Footer text="Copyright &copy; The Odin Project 2021" />
            </Section>
        </div>
    );
}
