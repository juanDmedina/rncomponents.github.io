type typePrompt = 'default' | 'plain-text' | 'secure-text' |'login-password'| 'numeric'| 'email-address'| 'phone-pad'

export interface IPrompt{
    title: string;
    message?: string;
    okText: string;
    cancelText: string;
    type?: typePrompt;
    cancelable?: boolean;
    defaultValue?: string;
    placeholder?: string;
}
