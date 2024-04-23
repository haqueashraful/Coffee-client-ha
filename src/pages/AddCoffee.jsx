import { useForm } from "react-hook-form";
import "../assets/css/add-coffee.css";

const AddCoffee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  <div className="add-coffee-section">
      <div className="add-coffee contain">
      <div className=" coffee-section">
        <div className="space-y-5 mb-8">
          <h1 className="text-[#331A15] font-rancho text-center font-bold text-5xl">
            Add New Coffee
          </h1>
          <p className="text-center text-lg px-28">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-8 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="name"
                className="text-lg text-base-content font-bold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                {...register("name", { required: "Name is required" })}
                placeholder="name"
                className="input-coffee-rn"
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="chef"
                className="text-lg text-base-content font-bold mb-3"
              >
                Chef
              </label>
              <input
                id="chef"
                type="text"
                name="chef"
                placeholder="Chef Name"
                {...register("chef")}
                className="input-coffee-rn"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="supplier"
                className="text-lg text-base-content font-bold mb-3"
              >
                Supplier
              </label>
              <input
                id="supplier"
                type="supplier"
                placeholder="Supplier"
                {...register("supplier")}
                className="input-coffee-rn"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="taste"
                className="text-lg text-base-content font-bold mb-3"
              >
                Taste
              </label>
              <input
                id="taste"
                type="taste"
                placeholder="Taste"
                {...register("taste")}
                className="input-coffee-rn"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="category"
                className="text-lg text-base-content font-bold mb-3"
              >
                Category
              </label>
              <input
                id="category"
                type="category"
                placeholder="Category"
                {...register("category")}
                className="input-coffee-rn"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="details"
                className="text-lg text-base-content font-bold mb-3"
              >
                Details
              </label>
              <input
                id="details"
                type="details"
                placeholder="Details"
                {...register("details")}
                className="input-coffee-rn"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="text-lg text-base-content font-bold mb-3"
              >
                Photo
              </label>
              <input
                id="photo"
                type="text"
                placeholder="Add a Photo URL"
                {...register("photo")}
                className="input-coffee-rn"
              />
            </div>
          </div>
          <div className="flex justify-center my-5">
            <input className="input-btn" type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AddCoffee;
