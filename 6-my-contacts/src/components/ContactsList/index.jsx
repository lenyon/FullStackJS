import { Container, Header, ListContainer, Card } from "./styles";

import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

export default function ContactsList() {
    return (
        <Container>
            <Header>
                <strong>3 contatos</strong>
                <a href="/">Novo contato</a>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="" />
                    </button>
                </header>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Mateus Silva</strong>
                            <small>instagram</small>
                        </div>
                        <span>mateus@academy.com.br</span>
                        <span>(55) 91234-5678</span>
                    </div>

                    <div className="actions">
                        <a href="">
                            <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="" />
                        </button>
                    </div>
                </Card>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Mateus Silva</strong>
                            <small>instagram</small>
                        </div>
                        <span>mateus@academy.com.br</span>
                        <span>(55) 91234-5678</span>
                    </div>

                    <div className="actions">
                        <a href="">
                            <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="" />
                        </button>
                    </div>
                </Card>

                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Mateus Silva</strong>
                            <small>instagram</small>
                        </div>
                        <span>mateus@academy.com.br</span>
                        <span>(55) 91234-5678</span>
                    </div>

                    <div className="actions">
                        <a href="">
                            <img src={edit} alt="Edit" />
                        </a>
                        <button type="button">
                            <img src={trash} alt="" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
