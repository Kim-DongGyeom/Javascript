import { Table } from 'react-bootstrap';

export default function Cart(props) {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>商品名</th>
            <th>数量</th>
            <th>変更する</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
