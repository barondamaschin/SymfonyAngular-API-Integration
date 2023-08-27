export interface GroupResponse {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:totalItems": number;
    "hydra:member": any[]; // or further define the structure if you want
    // other properties if needed
}
