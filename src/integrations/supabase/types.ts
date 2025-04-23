export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_users: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          dob: string | null
          email: string
          employer: string | null
          employment_status: string | null
          full_name: string
          id: string
          id_number: string | null
          income_bracket: string | null
          investment_count: number | null
          last_login: string | null
          nationality: string | null
          occupation: string | null
          pep: boolean | null
          phone: string | null
          postal_code: string | null
          province: string | null
          risk_profile: string | null
          source_of_funds: string | null
          tax_country: string | null
          tax_number: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          dob?: string | null
          email: string
          employer?: string | null
          employment_status?: string | null
          full_name: string
          id?: string
          id_number?: string | null
          income_bracket?: string | null
          investment_count?: number | null
          last_login?: string | null
          nationality?: string | null
          occupation?: string | null
          pep?: boolean | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          risk_profile?: string | null
          source_of_funds?: string | null
          tax_country?: string | null
          tax_number?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          dob?: string | null
          email?: string
          employer?: string | null
          employment_status?: string | null
          full_name?: string
          id?: string
          id_number?: string | null
          income_bracket?: string | null
          investment_count?: number | null
          last_login?: string | null
          nationality?: string | null
          occupation?: string | null
          pep?: boolean | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          risk_profile?: string | null
          source_of_funds?: string | null
          tax_country?: string | null
          tax_number?: string | null
        }
        Relationships: []
      }
      beneficiaries: {
        Row: {
          beneficiary_name: string
          created_at: string | null
          email: string | null
          id: string
          percentage: number | null
          phone: string | null
          relationship: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          beneficiary_name: string
          created_at?: string | null
          email?: string | null
          id?: string
          percentage?: number | null
          phone?: string | null
          relationship?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          beneficiary_name?: string
          created_at?: string | null
          email?: string | null
          id?: string
          percentage?: number | null
          phone?: string | null
          relationship?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "beneficiaries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      client_documents: {
        Row: {
          client_id: string
          document_path: string
          document_type: string
          id: string
          rejection_reason: string | null
          uploaded_at: string
          verification_status: Database["public"]["Enums"]["verification_status"]
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          client_id: string
          document_path: string
          document_type: string
          id?: string
          rejection_reason?: string | null
          uploaded_at?: string
          verification_status?: Database["public"]["Enums"]["verification_status"]
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          client_id?: string
          document_path?: string
          document_type?: string
          id?: string
          rejection_reason?: string | null
          uploaded_at?: string
          verification_status?: Database["public"]["Enums"]["verification_status"]
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_documents_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_notes: {
        Row: {
          admin_id: string
          client_id: string
          created_at: string
          id: string
          note: string
        }
        Insert: {
          admin_id: string
          client_id: string
          created_at?: string
          id?: string
          note: string
        }
        Update: {
          admin_id?: string
          client_id?: string
          created_at?: string
          id?: string
          note?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_notes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_status_logs: {
        Row: {
          changed_by: string
          client_id: string
          created_at: string
          id: string
          new_status: Database["public"]["Enums"]["client_status"]
          notes: string | null
          previous_status: Database["public"]["Enums"]["client_status"]
        }
        Insert: {
          changed_by: string
          client_id: string
          created_at?: string
          id?: string
          new_status: Database["public"]["Enums"]["client_status"]
          notes?: string | null
          previous_status: Database["public"]["Enums"]["client_status"]
        }
        Update: {
          changed_by?: string
          client_id?: string
          created_at?: string
          id?: string
          new_status?: Database["public"]["Enums"]["client_status"]
          notes?: string | null
          previous_status?: Database["public"]["Enums"]["client_status"]
        }
        Relationships: [
          {
            foreignKeyName: "client_status_logs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          approval_date: string | null
          approval_notes: string | null
          approved_by: string | null
          city: string | null
          created_at: string
          documents_submitted: boolean | null
          employer: string | null
          employment_status: string | null
          id: string
          id_number: string | null
          id_verification_status: Database["public"]["Enums"]["verification_status"]
          income_bracket: string | null
          is_two_factor_enabled: boolean | null
          kyc_complete: boolean | null
          nationality: string | null
          occupation: string | null
          pep: boolean | null
          postal_code: string | null
          province: string | null
          rejection_reason: string | null
          risk_profile: string | null
          source_of_funds: string | null
          status: Database["public"]["Enums"]["client_status"]
          tax_country: string | null
          tax_number: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          approval_date?: string | null
          approval_notes?: string | null
          approved_by?: string | null
          city?: string | null
          created_at?: string
          documents_submitted?: boolean | null
          employer?: string | null
          employment_status?: string | null
          id: string
          id_number?: string | null
          id_verification_status?: Database["public"]["Enums"]["verification_status"]
          income_bracket?: string | null
          is_two_factor_enabled?: boolean | null
          kyc_complete?: boolean | null
          nationality?: string | null
          occupation?: string | null
          pep?: boolean | null
          postal_code?: string | null
          province?: string | null
          rejection_reason?: string | null
          risk_profile?: string | null
          source_of_funds?: string | null
          status?: Database["public"]["Enums"]["client_status"]
          tax_country?: string | null
          tax_number?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          approval_date?: string | null
          approval_notes?: string | null
          approved_by?: string | null
          city?: string | null
          created_at?: string
          documents_submitted?: boolean | null
          employer?: string | null
          employment_status?: string | null
          id?: string
          id_number?: string | null
          id_verification_status?: Database["public"]["Enums"]["verification_status"]
          income_bracket?: string | null
          is_two_factor_enabled?: boolean | null
          kyc_complete?: boolean | null
          nationality?: string | null
          occupation?: string | null
          pep?: boolean | null
          postal_code?: string | null
          province?: string | null
          rejection_reason?: string | null
          risk_profile?: string | null
          source_of_funds?: string | null
          status?: Database["public"]["Enums"]["client_status"]
          tax_country?: string | null
          tax_number?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          body: string
          created_at: string
          id: string
          subject: string
          template_type: string
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          subject: string
          template_type: string
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          subject?: string
          template_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          client_number: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          client_number?: string | null
          created_at?: string
          email: string
          full_name: string
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          client_number?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      verification_codes: {
        Row: {
          code: string
          created_at: string
          expires_at: string
          id: string
          user_id: string
          verified: boolean | null
        }
        Insert: {
          code: string
          created_at?: string
          expires_at?: string
          id?: string
          user_id: string
          verified?: boolean | null
        }
        Update: {
          code?: string
          created_at?: string
          expires_at?: string
          id?: string
          user_id?: string
          verified?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      client_status:
        | "pending_registration"
        | "verification_pending"
        | "background_check"
        | "pending_approval"
        | "approved"
        | "active"
        | "rejected"
        | "suspended"
      verification_status: "not_submitted" | "pending" | "verified" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      client_status: [
        "pending_registration",
        "verification_pending",
        "background_check",
        "pending_approval",
        "approved",
        "active",
        "rejected",
        "suspended",
      ],
      verification_status: ["not_submitted", "pending", "verified", "rejected"],
    },
  },
} as const
