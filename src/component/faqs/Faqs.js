import Accordion from "react-bootstrap/Accordion";
import { faqsContent } from "../../constant/dummyData";

function FaqsComponent() {
  return (
    <Accordion defaultActiveKey={['0', '1', '2', '3', '4', '5', '6']}>
      {faqsContent.map((item, index) => {
        return (
          <>
            <Accordion.Item className="mb-0" eventKey={item.key}>
              <Accordion.Header>
                <h6 className="heading-title-banner-faq mb-4">{item.title}</h6>
              </Accordion.Header>
              <Accordion.Body>
                <p className="heading-text-repair-area">{item.text}</p>
              </Accordion.Body>
            </Accordion.Item>
          </>
        );
      })}
    </Accordion>
  );
}

export default FaqsComponent;
