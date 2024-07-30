import { useCallback, useState } from 'react';
import { Table, TableCell, TableHeader, TableHeaderCell, TableRow, TableVirtualizedBody } from 'monday-ui-react-core';

type User = {
    id: string;
    name: string;
    age: number;
};

const usersList: User[] = [
    { id: '1', name: 'Mike', age: 20 },
    { id: '2', name: 'John', age: 25 },
];

const columns = [
    { id: 'name', title: 'Name' },
    { id: 'age', title: 'Age' }
]

function App() {
    const [users] = useState(usersList);

    const rowRenderer = useCallback((user: User) => {
        return <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
        </TableRow>;
    }, []);

    return (
        <Table errorState={<p>error</p>} emptyState={<p>empty</p>} columns={columns} style={{height: 250}}>
            <TableHeader>
                {columns.map(cell => <TableHeaderCell key={cell.id} {...cell} />)}
            </TableHeader>
            <TableVirtualizedBody items={users} rowRenderer={rowRenderer} />
        </Table>
    );
}

export default App;
