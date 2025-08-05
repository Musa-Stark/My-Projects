import React, { useState } from "react";
import P from "../P";
import Button from "../Button";
import H from "../H";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const categories = [
    "Coffee",
    "Tea",
    "Pastries",
    "Sandwiches",
    "Desserts",
    "Cold Drinks",
    "Hot Drinks",
    "Snacks",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));

      // Create image preview
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setImagePreview(e.target.result);
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Item name is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Please enter a valid price";
    }

    if (!formData.image) {
      newErrors.image = "Item image is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      console.log("Adding item:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        // Reset form after successful submission
        setFormData({
          name: "",
          category: "",
          price: "",
          image: null,
          description: "",
        });
        setImagePreview(null);
        alert("Item added successfully!");
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      category: "",
      price: "",
      image: null,
      description: "",
    });
    setImagePreview(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          {/* Main add item card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
              </div>

              <H style="text-3xl font-bold mb-2">Add New Item</H>
              <P text="Add a new item to your cafe menu" style="text-lg" />
            </div>

            {/* Add item form */}
            <div className="space-y-6">
              {/* Name and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 bg-white/70"
                    placeholder="e.g. Cappuccino"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 bg-white/70"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>

              {/* Price Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 bg-white/70"
                    placeholder="0.00"
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Image *
                </label>
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <input
                      type="file"
                      name="image"
                      onChange={handleInputChange}
                      accept="image/*"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 bg-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                    />
                    {errors.image && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.image}
                      </p>
                    )}
                  </div>

                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-200 bg-white/70 resize-none"
                  placeholder="Describe your item... (minimum 10 characters)"
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                  )}
                  <p className="text-gray-400 text-sm ml-auto">
                    {formData.description.length} characters
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <div className="flex-1" onClick={handleSubmit}>
                  <Button text={isSubmitting ? "Adding Item..." : "Add Item"} />
                </div>

                <button
                  type="button"
                  onClick={handleClearForm}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition duration-200 font-semibold rounded-xl"
                >
                  Clear Form
                </button>
              </div>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex-1">
                    <P
                      text="Tips for adding items:"
                      style="font-medium text-blue-800 mb-1"
                    />
                    <P
                      text="• Use clear, descriptive names • Choose high-quality images • Write detailed descriptions • Set competitive prices"
                      style="text-sm text-blue-700 leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-6 text-center">
            <P
              text="All fields marked with * are required"
              style="text-sm opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
