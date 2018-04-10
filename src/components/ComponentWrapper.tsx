import * as React from 'react';
import { ThemeProvider, theme } from 'themes';

interface ComponentWrapperProps {
    children: {};
}

const ComponentWrapper: React.SFC<ComponentWrapperProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ComponentWrapper;
