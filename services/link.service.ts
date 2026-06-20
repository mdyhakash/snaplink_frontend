import api from "@/lib/axios";

export async function createLink(data: any) {
  const res = await api.post("/api/link/create", {
    original_url: data.originalUrl,
  });
  return res.data;
}
