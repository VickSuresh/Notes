import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        status: string;
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        status?: string;
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

