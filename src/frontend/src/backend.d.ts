import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TeamMember {
    id: bigint;
    bio: string;
    name: string;
    role: string;
    image: string;
}
export interface Service {
    id: bigint;
    title: string;
    content: string;
    description: string;
    iconName: string;
}
export type Time = bigint;
export interface ContactSubmission {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getServices(): Promise<Array<Service>>;
    getTeamMembers(): Promise<Array<TeamMember>>;
    seedData(): Promise<void>;
    submitContact(name: string, email: string, subject: string, message: string): Promise<void>;
}
