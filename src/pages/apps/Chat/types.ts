export type ChatUser = {
    id?: number;
    name?: string;
    avatar?: string;
    icon?: string;
    variant?: string;
    lastMessage?: string;
    lastMessageOn?: string;
    lastMessageSeen?: boolean;
    userStatus?: 'busy' | 'online' | 'away' | 'offline';
};

export type ChatMessage = {
    id: number;
    from: ChatUser;
    to: ChatUser;
    message: string;
    sendOn?: string;
};
