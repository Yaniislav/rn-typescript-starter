import { Component, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<IProps> {
  componentDidCatch(): void {
    // write logic here
    // maybe dispatch some action to the store
  }

  render(): ReactNode {
    return this.props.children;
  }
}
