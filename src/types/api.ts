/**
 * API Response and Request types
 */

export interface SpinResponse {
  spins: number;
}

export interface SpinUpdateRequest {
  spins: number;
}

export interface ApiError {
  message: string;
  code?: string;
}
