export interface Reservation {
  id: string;                   // 유저 ID
  company_name: string;        // 회사 이름
  name: string;                // 이름
  phone: string;               // 연락처
  agree: boolean;              // 개인정보 동의 (boolean으로 수정)
  created_at: string;          // 요청 날짜 (string 형식)
  updated_at: string;          // 업데이트 날짜 (string 형식)
  deleted_at: string | null;   // 삭제 날짜 (string 또는 null)
}
