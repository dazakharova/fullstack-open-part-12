import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

describe('Todo component', () => {
  const baseTodo = { _id: '1', text: 'Write tests', done: false };

  test('renders text and not-done state', () => {
    render(<Todo data={baseTodo} onDelete={() => {}} onComplete={() => {}} />);
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /set as done/i })).toBeInTheDocument();
  });

  test('renders done state (no Set as done button)', () => {
    const doneTodo = { ...baseTodo, done: true };
    render(<Todo data={doneTodo} onDelete={() => {}} onComplete={() => {}} />);
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /set as done/i })).not.toBeInTheDocument();
  });

  test('clicking Set as done calls completeTodo with todo', async () => {
    const user = userEvent.setup();
    const completeTodo = vi.fn();

    render(<Todo data={baseTodo} onDelete={() => {}} onComplete={completeTodo} />);
    await user.click(screen.getByRole('button', { name: /set as done/i }));
    expect(completeTodo).toHaveBeenCalledTimes(1);
    expect(completeTodo).toHaveBeenCalledWith(baseTodo);
  });

  test('clicking Delete calls deleteTodo with todo', async () => {
    const user = userEvent.setup();
    const deleteTodo = vi.fn();

    render(<Todo data={baseTodo} onDelete={deleteTodo} onComplete={() => {}} />);
    await user.click(screen.getByRole('button', { name: /delete/i }));
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(baseTodo);
  });
});
