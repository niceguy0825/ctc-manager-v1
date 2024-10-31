import http from './http';

export interface Reservation {
  id: string;
  company_name: string;
  name: string;
  phone: string;
  agree: boolean;              // 'agree' 타입 수정
  created_at: string;          // 'created_at' 타입 수정
  updated_at: string;          // 'updated_at' 타입 수정
  deleted_at: string | null;   // 'deleted_at' 타입 수정
}

interface ReservationResponse {
  success: boolean;
  data: Reservation[];
}

export const reservation = async (): Promise<ReservationResponse> => {
  const response = await http.get<ReservationResponse>('/reservation'); // 예약 API 호출
  return response.data; // API로부터 받은 데이터 반환
};
