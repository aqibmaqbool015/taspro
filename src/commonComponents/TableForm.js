import Table from "react-bootstrap/Table";
import { tableDetail } from "../constant/dummyData";

function TableForm() {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>
            <h6 className="heading-title-banner-faq mb-4">Description</h6>
          </th>
          <th>
            <h6 className="heading-title-banner-faq mb-4">Service Charge</h6>
          </th>
          <th>
            <h6 className="heading-title-banner-faq mb-4">Labour</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableDetail.map((item, index) => {
          return (
            <>
              <tr>
                <td>
                <p className="heading-text-repair-area">
                    {item.one}
                </p>
                </td>
                <td>
                <p className="heading-text-repair-area">
                    {item.two}
                </p>
                </td>
                <td>
                <p className="heading-text-repair-area">
                    {item.three}
                </p>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableForm;
