import { supabase } from "../lib/supabase";
import {
  sampleProfile,
  sampleSkills,
  sampleProjects,
  sampleExperiences,
  sampleTestimonials,
} from "../data/sampleData";

const handleFallback = (fallbackValue) => fallbackValue;

export const getProfile = async () => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .limit(1)
      .single();
    if (error) throw error;
    return data || sampleProfile;
  } catch {
    return handleFallback(sampleProfile);
  }
};

export const updateProfile = async (id, updates) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data[0];
};

export const getSkills = async () => {
  try {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data?.length ? data : sampleSkills;
  } catch {
    return handleFallback(sampleSkills);
  }
};

export const getProjects = async () => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data?.length ? data : sampleProjects;
  } catch {
    return handleFallback(sampleProjects);
  }
};

export const getExperiences = async () => {
  try {
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("start_date", { ascending: false });
    if (error) throw error;
    return data?.length ? data : sampleExperiences;
  } catch {
    return handleFallback(sampleExperiences);
  }
};

export const getTestimonials = async () => {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data?.length ? data : sampleTestimonials;
  } catch {
    return handleFallback(sampleTestimonials);
  }
};

export const sendMessage = async ({ name, email, subject, message }) => {
  const { error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, subject, message }]);
  if (error) throw error;
  return true;
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};

export const uploadImage = async (file) => {
  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { data, error } = await supabase.storage
    .from("portfolio-images")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) throw error;
  const { data: publicUrlData } = supabase.storage
    .from("portfolio-images")
    .getPublicUrl(fileName);
  return publicUrlData.publicUrl;
};

export const createProject = async (project) => {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select();
  if (error) throw error;
  return data[0];
};

export const updateProject = async (id, updates) => {
  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data[0];
};

export const deleteProject = async (id) => {
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw error;
};

export const createSkill = async (skill) => {
  const { data, error } = await supabase
    .from("skills")
    .insert([skill])
    .select();
  if (error) throw error;
  return data[0];
};

export const updateSkill = async (id, updates) => {
  const { data, error } = await supabase
    .from("skills")
    .update(updates)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data[0];
};

export const deleteSkill = async (id) => {
  const { error } = await supabase.from("skills").delete().eq("id", id);
  if (error) throw error;
};

export const createExperience = async (experience) => {
  const { data, error } = await supabase
    .from("experiences")
    .insert([experience])
    .select();
  if (error) throw error;
  return data[0];
};

export const updateExperience = async (id, updates) => {
  const { data, error } = await supabase
    .from("experiences")
    .update(updates)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data[0];
};

export const deleteExperience = async (id) => {
  const { error } = await supabase.from("experiences").delete().eq("id", id);
  if (error) throw error;
};
